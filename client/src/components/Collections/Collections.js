const categories = [
  {
    name: 'Lashes',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/files/lashes_2x_f19a10f2-6f6c-442d-b1fe-88626d85eeb8_360x.png?v=1629429625',
    imageAlt: 'Two women showing lashes',
    description: 'We have all the lengths, diameters, and curls that you need to customize a look for each client.',
  },
  {
    name: 'Adhesives',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/files/adhancive_2x_ed8cbef4-31f5-4986-b8f4-b529119a4287_360x.png?v=1629429648',
    imageAlt: 'Eyelash adhesives',
    description: 'Quality adhesives with long lasting retention for your clients.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0539/7102/6115/files/supplies_2x_186774f8-24d5-43a7-808b-f103846f2f36_360x.png?v=1629429647',
    imageAlt: 'Elash scissors and supplies',
    description: 'Everything you need and nothing you dont to stock your lash studio.',
  },
]
 
export default function Collections() {
  return (
    <div className="bg-white">
      <div className="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 uppercase">Shop the Collections</h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
        </p>

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
