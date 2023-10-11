/* eslint-disable no-unused-vars */
import Header from './Header';
import CartOverview from './../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  //console.log(navigation);
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-800">
      {isLoading && <Loader />}
      <Header />
      <div className=" ">
        <main className="mx-auto w-96 bg-gray-500">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
