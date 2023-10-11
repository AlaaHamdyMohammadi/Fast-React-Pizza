import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="bg-yellow-500 flex justify-around uppercase px-4 py-3 sm:px-6 border-b border-stone-200">
      <Link to="/" className="font-semibold tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
