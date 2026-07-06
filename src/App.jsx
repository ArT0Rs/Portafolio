import { useEffect } from 'react'
import Navbar from './components/JAVA/Navbar'
import ParticuleBackground from './components/JAVA/Fondo'
import './App.css'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progressEl = document.getElementById('Progres');
      if (progressEl) {
        progressEl.style.width = (s / (h || 1)) * 100 + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    
    <div className="void" id="Progres"></div>

    <ParticuleBackground />

    <header className="header">
      <Navbar />
    </header>

    <main className="container">
      <section id='home'>
        <h1>Hola Mundo</h1>
        <p>Desarrollador Web</p>
        <p>En construccion... </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto ipsum voluptas. Mollitia molestiae officiis, nam illum ea sint necessitatibus laborum doloremque odio tenetur eaque culpa beatae suscipit obcaecati velit.
        Aliquam deleniti ducimus sint minus sequi nulla consequuntur? Officiis velit atque itaque, necessitatibus minima quisquam omnis amet ad. Commodi ratione illo id doloremque mollitia repudiandae voluptatum a est ipsa laboriosam!
        Aut maiores neque totam quibusdam illum nesciunt quia soluta saepe, voluptas veniam aperiam voluptatibus doloremque tenetur reiciendis ad enim molestiae at laudantium ullam omnis quam ratione quod! Cupiditate, sit quis.
        Amet eligendi earum ad. Facilis, fuga laboriosam obcaecati eligendi commodi adipisci neque fugiat rem expedita laborum, nostrum dicta itaque iure odio inventore atque optio ratione ad possimus similique quas quos.
        Fugit molestias quae atque fugiat consectetur, magnam omnis molestiae quaerat maiores excepturi itaque impedit distinctio sed ullam earum repellendus quod dolore, tempora ratione animi? Eveniet quis commodi odio modi repellat?
        In beatae aperiam molestiae, maiores officia dignissimos, at rem eos voluptatem non quasi vero officiis veritatis ipsa culpa mollitia, autem doloremque iste perferendis sapiente. Aspernatur deleniti consectetur nisi eligendi quas.
        Itaque, delectus unde. Vero, quas? Obcaecati porro iure sunt error consequatur? Error obcaecati neque quo illo dolores assumenda, doloribus animi cumque vero magnam recusandae optio accusamus deleniti nobis pariatur aliquid!
        Quod repellat ullam minus quis suscipit itaque a repellendus necessitatibus, id minima similique doloribus quam debitis repudiandae nihil neque tenetur modi voluptatum? Eum neque placeat quaerat, voluptatum accusantium totam fugit.
        Deserunt at laborum laboriosam eius qui magnam numquam deleniti asperiores voluptas doloribus quasi similique veritatis a laudantium excepturi assumenda saepe obcaecati quia maxime culpa illum, repellat id? Error, eos consequatur.
        Voluptatibus, nihil placeat ut porro maiores deleniti facilis, illum amet quasi iure, earum praesentium minus suscipit est sit. Atque culpa quidem natus temporibus quas modi labore tempora voluptatum accusamus laborum!
        Animi exercitationem earum alias dolore obcaecati, maiores veritatis facere beatae reiciendis ex impedit laborum natus quas maxime adipisci perferendis ea dolores error quis aperiam perspiciatis non sapiente debitis. Omnis, reprehenderit?
        Vitae dignissimos accusantium sit sequi sapiente aperiam harum cumque sunt! Sequi velit beatae, aliquam officia aperiam fugiat quasi necessitatibus natus voluptate minima. Excepturi aliquam velit mollitia expedita saepe laboriosam officiis.
        In aut officiis pariatur mollitia culpa cupiditate ipsam unde nulla odit. Amet, cum aut enim laudantium quae deleniti qui necessitatibus itaque natus et nam temporibus inventore sint omnis distinctio. Enim.
        Tempore illum asperiores, cumque at nisi ipsum placeat porro optio odio unde excepturi nesciunt alias, sint facere repudiandae est cum quod eveniet, soluta assumenda aliquid pariatur. In eveniet accusantium dicta.
        Consequatur, quia placeat at a harum nam corporis autem mollitia perferendis quisquam consequuntur distinctio rem deleniti laborum dolores aliquam impedit ipsa! Alias obcaecati nihil provident ducimus quis sunt maiores eum.
        Est excepturi reiciendis incidunt obcaecati, et enim sed ea perferendis quibusdam harum nam architecto, odio debitis illum dolorum necessitatibus aut accusantium dicta esse, laboriosam quia cumque? Cumque beatae ducimus quis?
        Velit laborum nesciunt voluptatem quas, magnam eum similique rem numquam. Exercitationem, culpa! Qui vitae porro laborum, similique in, natus enim accusamus hic sequi atque fuga incidunt, culpa ea praesentium recusandae!
        Corporis beatae accusamus nostrum repellat soluta dicta ea velit voluptate incidunt dolorem ab laboriosam a mollitia praesentium omnis nisi aut, ullam unde molestias, quo sapiente! Voluptatem sint non autem expedita?
        Quos autem reprehenderit recusandae aut sit unde amet odio minima architecto, explicabo beatae alias omnis ad assumenda error veniam sed repellat. Iusto fugiat accusantium est nobis quo, corporis aliquam natus.
        Sint, accusamus placeat labore nobis delectus commodi magnam dignissimos ipsam alias laborum, laudantium natus quisquam reprehenderit ad fugiat suscipit saepe? Voluptate ab itaque iusto nihil aliquam aliquid voluptatum quibusdam in.</p>
      </section>
      
    </main>

    <footer className='footer'>
      <p>Footer</p>
    </footer>
    </>
  )
}

export default App
