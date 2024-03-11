import React, { memo } from "react";
import Map from "../../utils/map";

const horarioFuncionamento = "Quarta-feira à domingo, de 12h às 18h, sábado e domingo, de 11h às 19:30h";

const Location = () => {
  return (
    <>
      {/* LOCATION DESKTOP */}
      <section id="locationD" className="hidden lg:flex w-full mt-20 justify-center items-center h-[600px]  container mx-auto max-w-[2500px]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}}>
        <div className="flex flex-col justify-center px-14" style={{ backgroundColor: '#15C1CD', width: '95%', height: '100%', borderRadius: 20, boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)" }}>
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="w-28 h-0.5 bg-white mb-3" style={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}></span>
              <h2 className="text-4xl text-white">LOCALIZAÇÃO</h2>
            </div>
          </div>
          <div className="locationDesktop flex items-center justify-between mt-8">
            {/* Seção da Localização */}
            <div className="w-1/2 justify-start  flex flex-col gap-1">
              <h3 className="text-3xl text-white">Canto da Sereia</h3>
              <address className="text-white text-xl">
                R. Benedito Tasso Dutra nº 123, Village, Formosa, GO, 73814-505<br />
                <p className="text-white mt-1">Telefone: (61) 98166-1974</p>
                <p className="text-white mt-1">Email: cantodasereia02@gmail.com</p>
              </address>
              <h4 className="text-white text-3xl mt-5">Horário de atendimento</h4>
              <p className="text-white text-xl">{horarioFuncionamento}</p>

              <h4 className="text-white text-3xl mt-5">Música ao vivo</h4>
              <p className="text-white text-xl ">Sexta, sábado e domingo</p>
            </div>
            {/* Seção do Mapa */}
            <div className="locationRight w-1/2 flex justify-end items-center h-[25rem]">
              <Map/>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION MOBILE */}
      <section id="location" className="flex justify-center items-center overflow-x-hidden " style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'}}>
        <div className="flex flex-col justify-center items-center h-full lg:hidden" style={{ width: '95%', backgroundColor: '#15C1CD', borderRadius: 10, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'  }}>
          <div className="mt-5 flex flex-col justify-center items-center">
            <span className="w-28 h-0.5 bg-white mb-2" style={{boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)"}}></span>
            <h2 className="text-white text-3xl font-light" >LOCALIZAÇÃO</h2>
          </div>
          <div className="flex justify-center items-center mt-5 object-cover" style={{ width: '90%', height: 300 }}>
            <Map loading="lazy"/>
          </div>
          <div className="locationMobileTop  justify-start items-center mt-5 " style={{ width: '90%' }}>
            <h3 className="text-2xl text-white" style={{fontWeight: 400}}>Canto da Sereia</h3>
            <address className="text-white text-lg font-light">
              R. Benedito Tasso Dutra nº 123, Setor setorial, Formosa, GO, 73814-505<br />
              <p className="text-white">Telefone: (61) 98166-1974</p>
              <p className="text-white">Email: cantodasereia02@gmail.com</p>
            </address>
            <h4 className="text-white text-2xl mt-5 font-light" style={{fontWeight: 400}}>Horário de atendimento</h4>
            <p className="text-white text-lg font-light">{horarioFuncionamento}</p>

            <h4 className="text-white text-2xl mt-5 font-light" style={{fontWeight: 400}}>Música ao vivo</h4>
            <p className="text-white text-lg font-light ">Sexta, sábado e domingo</p>

            <h4 className="text-white text-2xl mt-5 font-light" style={{fontWeight: 400}}>Seu evento perfeito começa aqui!</h4>
              <p className="text-white text-lg font-light pb-5">Eventos corporativos, confraternizações, aniversários, reuniões</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Location);
