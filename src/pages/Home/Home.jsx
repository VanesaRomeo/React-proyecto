
import { Abount } from '@/component/Abount/Abount';
import AutoPlay from '@/component/Carrousel/Carrousel';
import { Hero } from '@/component/Hero/Hero';
import { HomeConteiner } from './HomeStyles';
import { Product } from '@/component/Productos/Product';

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
