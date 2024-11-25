
  import { motion } from "framer-motion";
  import CartIcons from "./CartIcon/CartIcons";
  import CartModel from "./../CartModel/CartModel";
  import { useLocation, useNavigate } from "react-router-dom";
  import { useEffect } from "react";
  import { Link } from "react-scroll";
  import { MenuHamburguesa } from "../MenuHamburguesa/MenuHamburguesa";
  import { useDispatch, useSelector } from "react-redux";

import { CartContainer, ContainerModelCart, HeaderConteiner, LinksAndCartContainer, LinksContainer } from "./NavbarStyles";
import { closeMenu, toggleMenu } from "../../redux/features/menuSlice";
  
  
  export const Navbar = () => {
   
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";
    const isProductsPage = location.pathname === "/Productos";
  
    useEffect(() => {
      // Cerrar menú al cambiar de ruta
      dispatch(closeMenu());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname, dispatch]);
  
    return (
      <HeaderConteiner>
        <img  src="/src/assets/img/logo1 copy.png" 
        alt="Descripción de la imagen" />
  
        <LinksAndCartContainer>
          <MenuHamburguesa handleClicked={() => dispatch(toggleMenu())} />
          {/* Links de navegación */}
          <LinksContainer $clicked={isMenuOpen}>
  
            {isHomePage ? (
              <>
                <li>
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    onClick={() => dispatch(closeMenu())}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    onClick={() => dispatch(closeMenu())}
                  >
                    Conócenos
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    smooth={true}
                    duration={500}
                    onClick={() => dispatch(closeMenu())}
                  >
                    Productos
                  </Link>
                </li>
              </>
            ) : (
              <li
                className="liBack"
                onClick={() => {
                  navigate(-1);
                  dispatch(closeMenu());
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "bisque",
                  padding: "0.7rem",
                  
                }}
              >
                Volver
              </li>
            )}
  
            {isProductsPage && (
              <>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <CartContainer>
                    <CartIcons />
                  </CartContainer>
                </motion.div>
                <ContainerModelCart>
                  <CartModel />
                </ContainerModelCart>
              </>
            )}
          </LinksContainer>
        </LinksAndCartContainer>
      </HeaderConteiner>
    );
  };
  