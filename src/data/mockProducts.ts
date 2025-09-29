import { Product, PCBuild } from '@/types/product';

export const mockProducts: Product[] = [
  // CPUs
  {
    id: 'cpu-1',
    name: 'AMD Ryzen 9 7950X',
    brand: 'AMD',
    category: 'cpu',
    price: 699.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&h=500&fit=crop',
    stock: 15,
    rating: 4.8,
    reviews: 342,
    description: '16-core, 32-thread flagship processor with exceptional performance for gaming and content creation.',
    specifications: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '170W',
      'Socket': 'AM5'
    },
    compatibility: ['AM5'],
    featured: true,
    discount: 13
  },
  {
    id: 'cpu-2',
    name: 'Intel Core i9-13900K',
    brand: 'Intel',
    category: 'cpu',
    price: 589.99,
    originalPrice: 689.99,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500&h=500&fit=crop',
    stock: 12,
    rating: 4.7,
    reviews: 289,
    description: '24-core processor with hybrid architecture for unmatched gaming performance.',
    specifications: {
      'P-Cores': '8',
      'E-Cores': '16',
      'Base Clock': '3.0 GHz',
      'Boost Clock': '5.8 GHz',
      'TDP': '125W',
      'Socket': 'LGA1700'
    },
    compatibility: ['LGA1700'],
    featured: true,
    discount: 14
  },
  
  // GPUs
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4090',
    brand: 'NVIDIA',
    category: 'gpu',
    price: 1599.99,
    originalPrice: 1999.99,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&h=500&fit=crop',
    stock: 5,
    rating: 4.9,
    reviews: 523,
    description: 'The ultimate graphics card for 4K gaming and AI workloads.',
    specifications: {
      'Memory': '24GB GDDR6X',
      'CUDA Cores': '16384',
      'Base Clock': '2.23 GHz',
      'Boost Clock': '2.52 GHz',
      'TDP': '450W',
      'Interface': 'PCIe 4.0'
    },
    featured: true,
    discount: 20
  },
  {
    id: 'gpu-2',
    name: 'AMD Radeon RX 7900 XTX',
    brand: 'AMD',
    category: 'gpu',
    price: 999.99,
    originalPrice: 1199.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&h=500&fit=crop',
    stock: 8,
    rating: 4.6,
    reviews: 187,
    description: 'High-performance GPU with exceptional rasterization and ray tracing capabilities.',
    specifications: {
      'Memory': '24GB GDDR6',
      'Stream Processors': '6144',
      'Base Clock': '1.9 GHz',
      'Boost Clock': '2.5 GHz',
      'TDP': '355W',
      'Interface': 'PCIe 4.0'
    },
    featured: false,
    discount: 17
  },
  
  // RAM
  {
    id: 'ram-1',
    name: 'Corsair Vengeance RGB Pro 32GB',
    brand: 'Corsair',
    category: 'ram',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://images.unsplash.com/photo-1562113809-c8e42587055f?w=500&h=500&fit=crop',
    stock: 25,
    rating: 4.7,
    reviews: 412,
    description: 'High-performance DDR5 memory with stunning RGB lighting.',
    specifications: {
      'Capacity': '32GB (2x16GB)',
      'Speed': 'DDR5-6000',
      'CAS Latency': 'CL36',
      'Voltage': '1.35V',
      'RGB': 'Yes'
    },
    discount: 21
  },
  
  // Motherboards
  {
    id: 'mb-1',
    name: 'ASUS ROG Strix X670E-E',
    brand: 'ASUS',
    category: 'motherboard',
    price: 499.99,
    originalPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    stock: 10,
    rating: 4.8,
    reviews: 156,
    description: 'Premium AM5 motherboard with PCIe 5.0 and Wi-Fi 6E support.',
    specifications: {
      'Socket': 'AM5',
      'Chipset': 'X670E',
      'Memory Slots': '4x DDR5',
      'PCIe Slots': '3x PCIe 5.0',
      'M.2 Slots': '4',
      'Wi-Fi': 'Wi-Fi 6E'
    },
    compatibility: ['AM5'],
    discount: 17
  },
  
  // Storage
  {
    id: 'storage-1',
    name: 'Samsung 990 Pro 2TB NVMe',
    brand: 'Samsung',
    category: 'storage',
    price: 189.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop',
    stock: 30,
    rating: 4.9,
    reviews: 523,
    description: 'Ultra-fast PCIe 4.0 NVMe SSD with exceptional performance.',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0 x4',
      'Read Speed': '7450 MB/s',
      'Write Speed': '6900 MB/s',
      'Form Factor': 'M.2 2280',
      'Warranty': '5 years'
    },
    discount: 24
  },
  
  // PSU
  {
    id: 'psu-1',
    name: 'Corsair RM1000x',
    brand: 'Corsair',
    category: 'psu',
    price: 189.99,
    originalPrice: 229.99,
    image: 'https://images.unsplash.com/photo-1593152167544-085d3b9c4938?w=500&h=500&fit=crop',
    stock: 18,
    rating: 4.8,
    reviews: 234,
    description: '1000W 80+ Gold fully modular power supply.',
    specifications: {
      'Wattage': '1000W',
      'Efficiency': '80+ Gold',
      'Modular': 'Fully Modular',
      'Fan Size': '135mm',
      'Warranty': '10 years'
    },
    discount: 17
  },
  
  // Cabinet
  {
    id: 'cabinet-1',
    name: 'Lian Li O11 Dynamic EVO',
    brand: 'Lian Li',
    category: 'cabinet',
    price: 169.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop',
    stock: 12,
    rating: 4.9,
    reviews: 678,
    description: 'Premium mid-tower case with exceptional airflow and aesthetics.',
    specifications: {
      'Form Factor': 'Mid Tower',
      'Motherboard Support': 'E-ATX, ATX, mATX, ITX',
      'Drive Bays': '4x 3.5", 6x 2.5"',
      'Fan Support': 'Up to 10x 120mm',
      'Side Panel': 'Tempered Glass'
    },
    discount: 15
  },
  
  // Cooling
  {
    id: 'cooling-1',
    name: 'NZXT Kraken Z73 RGB',
    brand: 'NZXT',
    category: 'cooling',
    price: 279.99,
    originalPrice: 329.99,
    image: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?w=500&h=500&fit=crop',
    stock: 8,
    rating: 4.7,
    reviews: 189,
    description: '360mm AIO liquid cooler with customizable LCD display.',
    specifications: {
      'Radiator Size': '360mm',
      'Fan Speed': '500-2000 RPM',
      'Noise Level': '21-38 dBA',
      'Pump Speed': '800-2800 RPM',
      'RGB': 'Yes',
      'Display': '2.36" LCD'
    },
    discount: 15
  }
];

export const mockPCBuilds: PCBuild[] = [
  {
    id: 'build-1',
    name: 'Ultimate Gaming Beast',
    type: 'gaming',
    totalPrice: 3499.99,
    image: 'https://images.unsplash.com/photo-1598057076865-c67fefd248d3?w=800&h=600&fit=crop',
    components: {
      cpu: mockProducts[0],
      gpu: mockProducts[2],
      ram: [mockProducts[4]],
      motherboard: mockProducts[5],
      storage: [mockProducts[6]],
      psu: mockProducts[7],
      cabinet: mockProducts[8],
      cooling: mockProducts[9]
    }
  },
  {
    id: 'build-2',
    name: 'Budget Gaming PC',
    type: 'budget',
    totalPrice: 1299.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=600&fit=crop',
    components: {
      cpu: mockProducts[1],
      gpu: mockProducts[3],
      ram: [mockProducts[4]],
      motherboard: mockProducts[5],
      storage: [mockProducts[6]],
      psu: mockProducts[7],
      cabinet: mockProducts[8]
    }
  },
  {
    id: 'build-3',
    name: 'Professional Workstation',
    type: 'office',
    totalPrice: 2199.99,
    image: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=800&h=600&fit=crop',
    components: {
      cpu: mockProducts[0],
      gpu: mockProducts[3],
      ram: [mockProducts[4]],
      motherboard: mockProducts[5],
      storage: [mockProducts[6]],
      psu: mockProducts[7],
      cabinet: mockProducts[8],
      cooling: mockProducts[9]
    }
  }
];