import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

const Directory = ( {sections} ) => (

  <div className='directory-menu'>
    {
      sections.map(( {title, imageUrl, id, size, linkUrl} ) => (
        <MenuItem key={id} judul={title} gambar={imageUrl} ukuranGambar={size} linkUrl={linkUrl}/>
      ))
    }
  </div>

);

// KITA BISA PAKE SPREADING KALAU KEY PROP-NYA NAMANYA DIBUAT SAMA
// SEMENTARA GW PAKE YANG BEDA UNTUK KEPERLUAN BELAJAR AJA
// JADI HARUSNYA SEPERTI INI
{/* <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/> */}
// DIBUAT SPREAD JADI SEPERTI INI:

// render() {
//   return (
//       <div className='directory-menu'>
//           {
//               this.state.sections.map(( {id, ...propertiYangLain} ) => (
//                   <MenuItem key={id} {...propertiYangLain}/>
//               ))
//           }
//       </div>
//   )
// }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

