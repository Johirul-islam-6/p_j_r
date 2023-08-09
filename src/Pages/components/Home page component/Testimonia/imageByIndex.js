const image1 = 'ht'
const image2 = 'ht'
const image3 = 'ht'
const image4 = 'ht'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
