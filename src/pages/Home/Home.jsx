
import { Abount } from '../../component/Abount/Abount';
import AutoPlay from '../../component/Carrousel/Carrousel';

import { Hero } from '../../component/Hero/Hero';
import { Product } from '../../component/productos/Product.JSX';
import { HomeConteiner } from './HomeStyles';

function Home() {

  return (
    <HomeConteiner>
      <Hero />
      <Abount />
      <AutoPlay />
      <Product />
    </HomeConteiner>
  );
}

export default Home;
