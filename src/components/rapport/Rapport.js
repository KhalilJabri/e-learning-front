import React from 'react'
import './Rapport.css'
import video from '../../assets/icons/video.png';
import teacher from '../../assets/icons/teacher1.png';
import Card from '../card/Card';
import etudiant from '../../assets/icons/etudiantDiplome.png';

function Rapport() {
  return (
    <div className='cards_container'>
        <Card
            src={video}
            price="50.000"
            title="Total videos"
         />
         <Card
            src={teacher}
            price="50000"
            title="Total teachers"
         />
         <Card
            src={etudiant}
            price="50000"
            title="Total etudiants"
         />
         {/* <Card
            src={video}
            price="50000"
            title="Total videos"
         /> */}
    </div>
  )
}

export default Rapport