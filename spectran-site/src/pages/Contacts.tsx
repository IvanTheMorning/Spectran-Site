import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contacts() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-12 text-gray-900">Контакты</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Наши координаты</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Адрес офиса и производства</h3>
                  <p className="text-gray-600 mt-1">
                    123456, г. Москва, ул. Электроники, д. 1, стр. 3
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Телефоны</h3>
                  <p className="text-gray-600 mt-1">+7 (495) 123-45-67 (Многоканальный)</p>
                  <p className="text-gray-600">+7 (900) 000-00-00 (Отдел продаж)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">info@spectran.ru</p>
                  <p className="text-gray-600">sales@spectran.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Режим работы</h3>
                  <p className="text-gray-600 mt-1">Пн-Пт: 09:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden h-[500px] border border-gray-200 shadow-sm">
           <iframe 
             src="https://yandex.ru/map-widget/v1/?ll=37.617635%2C55.755814&z=14" 
             width="100%" 
             height="100%" 
             frameBorder="0" 
             allowFullScreen={true}
             style={{ border: 0 }}
           ></iframe>
        </div>
      </div>
    </div>
  );
}
