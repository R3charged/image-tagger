"use client"

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { FiLayers } from 'react-icons/fi'
import { IconContext } from "react-icons";

function NavItem(link: string, name: string) {
    return (
        <>
        <NavigationMenuItem>
        <Link href={link} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {name}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      </>
    );
}

export default function Nav() {
    return (
        <div className='w-100 h-16 border-b-2'>
        <NavigationMenu className='w-full h-full p-2'>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                <IconContext.Provider value={{ className: "m-2 text-primary", size: "30" }}>
                                    <FiLayers/>
                                </IconContext.Provider>
                                
                                <h3 className='font-bold text-xl'>
                                    ImageTagger
                                </h3>
                            </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {NavItem("/tagger", "App")}
                {NavItem("/docs", "Documentation")}
            </NavigationMenuList>
        </NavigationMenu>
        </div>
    );
}