import Logo from '../assets/lipsilverhand.png'

export const Header = () => {
  return (
    <header>
        <img className='logo' src={Logo} alt="" />
        <a className='link' href="/">Home</a>
    </header>
  )
}
