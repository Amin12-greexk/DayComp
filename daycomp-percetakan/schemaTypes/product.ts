export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nama Produk',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Gambar Produk',
        of: [{type: 'image'}],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Deskripsi',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name',
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      },
    ],
  }