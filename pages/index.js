import Head from 'next/head';
import Navbar from '../components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />


      <div className="hero h-full bg-base-200 pt-14">
        <div className="hero-content flex flex-col lg:flex-row w-full items-start">
          <div className="text-center lg:text-left w-full flex-70 mt-2">
            <button class="btn btn-primary btn-block">Agregar nuevo enlace</button>
            <br />
            <div className='card p-4 bg-base-100 shadow-100 mt-2'>
              <input type="text" placeholder="Titulo" class="input input-sm w-auto mb-3" />
              <div class="form-control w-100">
                <label class="label">
                  <span class="label-text">Título</span>
                </label>
                <input type="text" placeholder="info@site.com" class="input input-bordered" />
              </div>
              <div class="form-control w-100">
                <label class="label">
                  <span class="label-text">Enlace</span>
                </label>
                <input type="text" placeholder="info@site.com" className="input input-bordered w-100" />
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm flex-30 flex">
            <div class="mockup-phone justify-center">
              <div class="camera"></div>
              <div class="display">
                <div class="artboard artboard-demo phone-1">Hi.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
