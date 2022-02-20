import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart.dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHiddenDropCart } from "../../redux/cart/cart.selectors";
// import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ( {sudahLogin, hidden} ) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                sudahLogin ? (
                    <OptionLink 
                        as='div' // atribute 'as' mengubah html tag jadi div. Bisa juga pake {component}
                        onClick={() => auth.signOut()}
                    > 
                        SIGN OUT 
                    </OptionLink> 
                ) : (
                    <OptionLink to='/signin'> 
                        SIGN IN 
                    </OptionLink>
                )
            } 
            <CartIcon />
        </OptionsContainer>
        { hidden ? null : (<CartDropdown />) }
    </HeaderContainer>
);

// ================================ DIGANTI SETELAH PAKE STYLED COMPONENT ============================

// const Header = ( {sudahLogin, hidden} ) => (
//     <div className="header">
//         <Link className="logo-container" to="/">
//             <Logo className="logo" />
//         </Link>
//         <div className="options">
//             <Link className="option" to='/shop'>
//                 SHOP
//             </Link>
//             <Link className="option" to='/contact'>
//                 CONTACT
//             </Link>
//             {
//                 sudahLogin ? (
//                     <div className="option" 
//                         onClick={() => auth.signOut()}
//                     > 
//                         SIGN OUT 
//                     </div> 
//                 ) : (
//                     <Link className="option" to='/signin'> 
//                         SIGN IN 
//                     </Link>
//                 )
//             } 
//             <CartIcon />
//         </div>
//         { hidden ? null : (<CartDropdown />) }
//     </div>
// );


// =============================== SEBELUM PAKE selector dan createStructuredSelector ==============================

// const mapStateToProps = ({
//     user: {userAktif},
//     cart: {hidden}
// }) => ({
//     sudahLogin: userAktif,
//     hidden
// });

// SETELAH pake selector dan createStructuredSelector jadi kayak begini: ================================================

const mapStateToProps = createStructuredSelector({
    sudahLogin: selectCurrentUser,
    hidden: selectHiddenDropCart
});

export default connect(mapStateToProps)(Header);