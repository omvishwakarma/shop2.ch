import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faShoppingCart,
  faUser,
  faHeadphonesAlt,
  faMapMarkerAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      {/* Section 1 */}
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center text-sm">
        <div>Welcome to Shop2.nh online eCommerce store.</div>
        <div className="flex items-center space-x-4">
          <span>Follow us:</span>
          <FontAwesomeIcon icon={faTwitter} className="cursor-pointer" />
          <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer" />
          <FontAwesomeIcon icon={faPinterest} className="cursor-pointer" />
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer" />
          <FontAwesomeIcon icon={faYoutube} className="cursor-pointer" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-[#F9B233] px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          shop2.ch
        </div>

        {/* Search Box */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </FontAwesomeIcon>
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white px-4 py-2 flex justify-between items-center">
        {/* Category Dropdown */}
        <div className="relative group">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-md">
            All Category
          </button>
          <ul className="absolute mt-2 bg-white border rounded-md shadow-lg hidden group-hover:block">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
          </ul>
        </div>

        {/* Contact Number */}
        <div className="text-sm font-medium text-gray-600 flex items-center space-x-2">
          <FontAwesomeIcon icon={faHeadphonesAlt} />
          <span>026 555 2 444</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
