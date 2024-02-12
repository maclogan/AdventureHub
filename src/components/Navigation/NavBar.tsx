import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../core/Button'

const NavBar = () => {
    const {isAuthenticated,loginWithPopup, logout} = useAuth0()
    return(
       <NavigationMenu.Root>
        <NavigationMenu.Item>
            <NavigationMenu.Link>Test</NavigationMenu.Link>
        </NavigationMenu.Item>
        {isAuthenticated ? 
            <NavigationMenu.Item>
                <Button text="Signout" action={logout} variant='default' />
            </NavigationMenu.Item>
            :
            <NavigationMenu.Item>
                <Button text="Login" action={loginWithPopup} variant="default"/>
            </NavigationMenu.Item>}
       </NavigationMenu.Root>
    )
}

export default NavBar