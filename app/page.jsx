import Feed from '@components/Feed'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <main>
        <div className="main">
            <div className='gradient'/>
        </div>

        <div className="app">
          <Hero />
          <Feed />
        </div>
    </main>
  )
}

export default page