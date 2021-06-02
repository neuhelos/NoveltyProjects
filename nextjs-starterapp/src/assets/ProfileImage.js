import Image from 'next/image'

const ProfileImage = () => (
  <Image
    src="/images/NilberNext.jpg" // Route of the image file
    height={5} // Desired size with correct aspect ratio
    width={5} // Desired size with correct aspect ratio
    layout='responsive'
    alt="NR"
  />
)

export default ProfileImage