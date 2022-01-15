const staticProducts = [
  {
    id: 1,
    name: 'Perchek Industrie',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1563223552-30d01fda3ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80',
    imageAlt: 'white light shining on eyelashes ',
  },
  {
    id: 2,
    name: 'Sharon McCutcheon',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1528047128849-2382ff646073?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt: 'white and black spiral light shining on eyelashes',
  },
  {
    id: 3,
    name: 'Ngin Akyurt Design',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1588398478692-d119ca406f7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt: 'white light shining on eyelashes',
  },
  {
    id: 4,
    name: 'Haley Kim Design',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    imageAlt: 'person holding black and silver scissors to glue eyelash',
  },
  {
    id: 5,
    name: 'Aleksandra Rupar Design',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1548902378-2ec44c906391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    imageAlt: 'woman left eye',
  },
  {
    id: 6,
    name: 'Apostolos Vamvouras Design',
    href: '#',
    price: '$25',
    description: '3 sizes available',
    imageSrc: 'https://images.unsplash.com/photo-1577912081467-7787def464c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    imageAlt: 'woman wearing a pink fur jacket',
  },
  // More products...
]

export default function Products() {
  return (
    <div className="max-w-2xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {staticProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
            </a>
          ))}
        </div>
      </div>
  )
}
