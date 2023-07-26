import { Dispatch, SetStateAction } from "react"

export type NavigationContextProps = {
    tabOfSectionSupport?: TabsOfSectionSupport, 
    setTabOfSectionSuport:  Dispatch<SetStateAction<TabsOfSectionSupport | undefined>>;
}

export type TabsOfSectionSupport = 'NETWORK' | 'POLICE' | 'FORUMS' | 'STORE'