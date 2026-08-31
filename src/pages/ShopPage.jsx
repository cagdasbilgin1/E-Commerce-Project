import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { fetchProducts, setOffset } from '../store/actions/productActions';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  
  const { categories, productList, total, fetchState, limit, offset } = useSelector(state => state.product);

  const [filterText, setFilterText] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [appliedFilter, setAppliedFilter] = useState('');
  const [appliedSort, setAppliedSort] = useState('');

  useEffect(() => {
    const params = { limit, offset };
    if (categoryId) params.category = categoryId;
    if (appliedFilter) params.filter = appliedFilter;
    if (appliedSort) params.sort = appliedSort;
    
    dispatch(fetchProducts(params));
  }, [categoryId, appliedFilter, appliedSort, limit, offset, dispatch]);

  const handleFilterClick = () => {
    setAppliedFilter(filterText);
    setAppliedSort(sortOption);
    dispatch(setOffset(0));
  };
  
  const pageCount = Math.ceil(total / limit) || 1;
  const currentPage = Math.floor(offset / limit);

  const handlePageClick = (event) => {
    const newOffset = event.selected * limit;
    dispatch(setOffset(newOffset));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Sort by rating descending and get top 5
  const topCategories = [...categories]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Header/Breadcrumb Section */}
      <section className="w-full py-10 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:mb-0">Shop</h2>
        <div className="flex items-center gap-4 text-sm font-bold">
          <span className="text-[#252B42]">Home</span>
          <span className="text-[#BDBDBD]">&gt;</span>
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </section>

      {/* Top 5 Categories Section */}
      <section className="w-full py-12 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {topCategories.map(cat => {
            const genderPath = cat.gender === 'k' ? 'kadin' : 'erkek';
            const catNamePath = cat.code.split(':')[1];
            return (
              <Link 
                key={cat.id} 
                to={`/shop/${genderPath}/${catNamePath}/${cat.id}`}
                className="relative overflow-hidden group rounded aspect-square flex items-center justify-center cursor-pointer"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-white p-4 text-center">
                  <h3 className="font-bold text-lg mb-1">{cat.title}</h3>
                  <p className="text-sm">Rating: {cat.rating}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>


      {/* Product List Section */}
      <section className="w-full py-12 px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center">
        {fetchState === 'FETCHING' ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#23A6F0]">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="font-bold">Loading Products...</p>
          </div>
        ) : fetchState === 'FAILED' ? (
          <div className="py-20 text-red-500 font-bold">Failed to load products.</div>
        ) : (
          <>
            <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <span className="text-[#737373] font-bold">Showing all {total} results</span>
              
              <div className="flex flex-col md:flex-row items-center gap-4">
                <input 
                  type="text"
                  placeholder="Search..."
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                  className="border border-[#E8E8E8] rounded p-2 outline-none focus:border-[#23A6F0] text-sm"
                />
                <select 
                  value={sortOption}
                  onChange={e => setSortOption(e.target.value)}
                  className="border border-[#E8E8E8] rounded p-2 outline-none focus:border-[#23A6F0] text-sm text-[#737373]"
                >
                  <option value="">Sort by...</option>
                  <option value="price:asc">Price: Low to High</option>
                  <option value="price:desc">Price: High to Low</option>
                  <option value="rating:asc">Rating: Low to High</option>
                  <option value="rating:desc">Rating: High to Low</option>
                </select>
                <button 
                  onClick={handleFilterClick}
                  className="bg-[#23A6F0] text-white px-6 py-2 rounded font-bold text-sm hover:bg-blue-500 transition"
                >
                  Filter
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {productList.map(product => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  image={product.images?.[0]?.url || 'https://via.placeholder.com/200'}
                  title={product.name}
                  department={product.description?.substring(0, 30) + '...'}
                  oldPrice={`$${(product.price * 1.2).toFixed(2)}`}
                  newPrice={`$${product.price.toFixed(2)}`}
                />
              ))}
            </div>

            {/* Pagination */}
            {total > limit && (
              <div className="mt-12 flex justify-center w-full gap-2 flex-wrap">
                <button 
                  disabled={currentPage === 0}
                  onClick={() => handlePageClick({ selected: currentPage - 1 })}
                  className="px-4 py-2 border border-[#E8E8E8] rounded text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &lt; Prev
                </button>
                
                {Array.from({ length: pageCount }).map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => handlePageClick({ selected: i })}
                    className={`px-4 py-2 border border-[#E8E8E8] rounded font-bold transition ${currentPage === i ? 'bg-[#23A6F0] text-white border-[#23A6F0]' : 'text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  disabled={currentPage === pageCount - 1}
                  onClick={() => handlePageClick({ selected: currentPage + 1 })}
                  className="px-4 py-2 border border-[#E8E8E8] rounded text-[#23A6F0] font-bold hover:bg-[#23A6F0] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next &gt;
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ShopPage;
