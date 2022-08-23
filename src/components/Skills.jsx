import React from 'react'
import csharp from '../img/csharp.png';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import php from '../img/php.png';
import mysql from '../img/sql.png';
import sqlserver from '../img/sqlserver.png';
import asp from '../img/asp.png';
//import java from '../img/java.png';
import wordpress from '../img/wordpress.png';

const Skills = () => {
  return (
    <div>
        <h3>Skills en programación</h3>
        <div class="container text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="col">
      <div class="p-3"><img src={html} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">   
      <div class="p-3"><img src={css} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={js} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={react} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={mysql} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={sqlserver} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={csharp} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={php} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={asp} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
    <div class="col">
      <div class="p-3"><img src={wordpress} class="img-thumbnail img-skills" alt="..."></img></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Skills