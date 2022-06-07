function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

const imageListArray = [
  {
    imageURL:
      'https://i.pinimg.com/originals/8b/38/40/8b38403216f9878a52107bbb5c8ebe60.jpg',
    clicked: false,
    id:1,
  },
  {
    imageURL:
      'https://i.pinimg.com/originals/00/21/06/0021062a35f3ae04a52af4abb966827e.jpg',
    clicked: false,
    id:2,
  },
  {
    imageURL:
      'https://i.pinimg.com/originals/b6/a8/7a/b6a87ac12c1c9c2a7c29d25092d796a0.jpg',
    clicked: false,
    id:3,
  },
  {
    imageURL:
      'https://i.pinimg.com/originals/8f/8a/ef/8f8aef9320835de413fded198814141e.jpg',
    clicked: false,
    id:4,
  },
  {
    imageURL:
      'https://i.pinimg.com/564x/3d/ae/8f/3dae8fc4256eb55b70f4efddb8fc34b0.jpg',
    clicked: false,
    id:5,
  },
  {
    imageURL:
      'https://i.pinimg.com/564x/c6/7d/8b/c67d8bb08d343b5e6220acf1a4ee3f2c.jpg',
    clicked: false,
    id:6,
  },
  {
    imageURL:
      'https://i.pinimg.com/564x/2d/06/8a/2d068a61da17db3091e19bf3ff9f7a0f.jpg',
    clicked: false,
    id:7,
  },
  {
    imageURL:
      'https://i.pinimg.com/564x/ce/2d/c2/ce2dc2edda81ca52443eb995a0a1ccea.jpg',
    clicked: false,
    id:8,
  },
  {
    imageURL:
      'https://i.pinimg.com/564x/3e/c6/02/3ec6020d4f280681bcc8a518f54b3082.jpg',
    clicked: false,
    id:9,
  },
  {
    imageURL:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc2048a4-227f-4f83-8611-3a6bb7090178/d923c2p-26ce20e7-bb9e-4133-8e77-4d204f33b4c5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjMjA0OGE0LTIyN2YtNGY4My04NjExLTNhNmJiNzA5MDE3OFwvZDkyM2MycC0yNmNlMjBlNy1iYjllLTQxMzMtOGU3Ny00ZDIwNGYzM2I0YzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IowuihGuOFqPmVOAaBWKR7kNRIN4ZLonDEdMWsqDI3E',
    clicked: false,
    id:10,
  },
  {
    imageURL:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc2048a4-227f-4f83-8611-3a6bb7090178/d923dhw-73b2476f-1f17-425f-9d24-96b0df0046ca.png/v1/fill/w_600,h_600,strp/sanji_by_d27a_d923dhw-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvY2MyMDQ4YTQtMjI3Zi00ZjgzLTg2MTEtM2E2YmI3MDkwMTc4XC9kOTIzZGh3LTczYjI0NzZmLTFmMTctNDI1Zi05ZDI0LTk2YjBkZjAwNDZjYS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9rX_jm2Ai6wErCSwGtbwT0PThsC9ogsFBSTSFjQXBIM',
    clicked: false,
    id:11,
  },
  {
    imageURL:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cc2048a4-227f-4f83-8611-3a6bb7090178/d923cqz-25b43887-b81e-415f-80c7-114d9d89eef6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjMjA0OGE0LTIyN2YtNGY4My04NjExLTNhNmJiNzA5MDE3OFwvZDkyM2Nxei0yNWI0Mzg4Ny1iODFlLTQxNWYtODBjNy0xMTRkOWQ4OWVlZjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IY0wht54j9Ni6Tsa_uiBi_3W9UOfYgyyKnsb-Atyc58',
    clicked: false,
    id:12,
  },
]

export { shuffle, imageListArray }
