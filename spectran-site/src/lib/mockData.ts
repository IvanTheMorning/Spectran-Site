import type { Category, Subcategory, Product } from '../types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Микроконтроллеры 8-бит',
    description: 'Классические решения для простых задач автоматизации'
  },
  {
    id: '2',
    name: 'Микроконтроллеры 32-бит',
    description: 'Высокопроизводительные чипы для сложных вычислений'
  },
  {
    id: '3',
    name: 'Силовая электроника',
    description: 'Драйверы двигателей и модули питания'
  }
];

export const mockSubcategories: Subcategory[] = [
  { id: '1-1', categoryId: '1', name: 'Промышленные (Industrial)' },
  { id: '1-2', categoryId: '1', name: 'Бытовые (Consumer)' },
  { id: '2-1', categoryId: '2', name: 'High Performance' },
  { id: '2-2', categoryId: '2', name: 'Low Power' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    categoryId: '1',
    subcategoryId: '1-1',
    name: 'SPC-801',
    shortDescription: 'Надежный 8-битный микроконтроллер для промышленной автоматики.',
    fullDescription: 'SPC-801 — это флагманская модель нашей линейки 8-битных контроллеров. Отличается повышенной помехоустойчивостью и широким диапазоном рабочих температур. Идеален для использования в системах умного дома, датчиках и простых исполнительных устройствах.',
    images: ['https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=800&q=80'],
    specifications: [
      { id: '1', name: 'Архитектура', value: 'RISC' },
      { id: '2', name: 'Тактовая частота', value: '20 МГц' },
      { id: '3', name: 'Flash-память', value: '32 КБ' },
      { id: '4', name: 'ОЗУ', value: '2 КБ' },
      { id: '5', name: 'Напряжение питания', value: '2.7 - 5.5 В' }
    ],
    isBestseller: true
  },
  {
    id: '2',
    categoryId: '2',
    subcategoryId: '2-1',
    name: 'SPC-3200ARM',
    shortDescription: 'Мощный 32-битный процессор на базе ядра ARM Cortex-M4.',
    fullDescription: 'Высокопроизводительное решение для задач цифровой обработки сигналов. Встроенный модуль FPU позволяет эффективно работать с плавающей точкой. Поддержка USB, Ethernet и CAN интерфейсов.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'],
    specifications: [
      { id: '1', name: 'Ядро', value: 'ARM Cortex-M4' },
      { id: '2', name: 'Тактовая частота', value: '168 МГц' },
      { id: '3', name: 'Flash-память', value: '1 МБ' },
      { id: '4', name: 'ОЗУ', value: '192 КБ' },
      { id: '5', name: 'Интерфейсы', value: 'USB OTG, CAN, SPI, I2C' }
    ],
    isBestseller: true
  },
  {
    id: '3',
    categoryId: '3',
    name: 'PWR-Module-5A',
    shortDescription: 'Модуль управления шаговым двигателем до 5А.',
    fullDescription: 'Интегрированный драйвер шагового двигателя с защитой от перегрева и перегрузки по току. Поддерживает микрошаговый режим до 1/256.',
    images: ['https://images.unsplash.com/photo-1563770095-39d46e84d87c?auto=format&fit=crop&w=800&q=80'],
    specifications: [
      { id: '1', name: 'Максимальный ток', value: '5 А' },
      { id: '2', name: 'Напряжение питания', value: '12 - 48 В' },
      { id: '3', name: 'Микрошаг', value: 'до 1/256' },
      { id: '4', name: 'Защита', value: 'Thermal, Overcurrent' }
    ]
  }
];
