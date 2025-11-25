import { Award, Users, History } from 'lucide-react';

export function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Intro */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">О компании Спектран</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы — команда инженеров и энтузиастов, объединившаяся для возрождения и развития отечественной микроэлектроники. Наша миссия — создавать доступные и надежные компоненты, которые станут основой для технологического суверенитета страны.
          </p>
        </div>

        {/* History & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <History className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Наша история</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Компания была основана группой выпускников ведущих технических вузов. Начиная с небольшой лаборатории в гараже, мы выросли до собственного производственного цеха.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Каждый наш продукт — результат месяцев исследований, тестирования и доработок. Мы не просто копируем зарубежные аналоги, а ищем собственные, более эффективные инженерные решения.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-64 md:h-full min-h-[300px] overflow-hidden relative">
             {/* Placeholder for History Image */}
             <img 
               src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
               alt="Лаборатория" 
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 bg-gray-100 rounded-2xl h-64 md:h-full min-h-[300px] overflow-hidden relative">
             {/* Placeholder for Team Image */}
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
               alt="Команда" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Наши ценности</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-gray-700">Открытость и честность перед клиентами.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-gray-700">Стремление к техническому совершенству.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-gray-700">Поддержка молодых специалистов и образования.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Сертификаты и награды</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-[3/4] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center p-4">
                <div className="text-center text-gray-400">
                  <Award className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <span className="text-sm">Сертификат {item}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Здесь будут размещены сканы реальных сертификатов соответствия и наград.
          </p>
        </div>

      </div>
    </div>
  );
}
