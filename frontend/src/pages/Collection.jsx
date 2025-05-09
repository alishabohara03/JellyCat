import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (value) => {
    if (Category.includes(value)) {
      setCategory(Category.filter((item) => item !== value));
    } else {
      setCategory([...Category, value]);
    }
  };

  const toggleSubCategory = (value) => {
    if (SubCategory.includes(value)) {
      setSubCategory(SubCategory.filter((item) => item !== value));
    } else {
      setSubCategory([...SubCategory, value]);
    }
  };

  const applyFilter = () => {
    let tempProducts = products.slice();
    if (showSearch && search) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (Category.length > 0) {
      tempProducts = tempProducts.filter((item) => Category.includes(item.category));
    }
    if (SubCategory.length > 0) {
      tempProducts = tempProducts.filter((item) => SubCategory.includes(item.subCategory));
    }
    setFilteredProducts(tempProducts);
  };

  const sortProducts = () => {
    let fpcopy = filteredProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilteredProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [Category, SubCategory, search, showSearch, products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? 'rotate-90' : ''
            }`}
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Animals", "Fantasy", "Holiday", "Miniatures"].map((cat) => (
              <p key={cat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat}
                  onChange={() => toggleCategory(cat)}
                />{' '}
                {cat}
              </p>
            ))}
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">SUBCATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {["Bears", "Bunnies", "Birds", "Monkeys", "Dragons", "Elves", "Santa", "Mini Bears"].map((subcat) => (
              <p key={subcat} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={subcat}
                  onChange={() => toggleSubCategory(subcat)}
                />{' '}
                {subcat}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side of Collection Page */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'OUR'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <div className="flex flex-row gap-2 justify-between items-center">
            <p className="text-sm font-medium">Sort By:</p>
            <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="relevant">Relevant</option>
              <option value="low-high">Low To High</option>
              <option value="high-low">High To Low</option>
            </select>
          </div>
        </div>
        

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;


