import {THEME, useTheme} from './Context/ThemeProvider'

export default function ThemeContent(): Element {
    const { theme } = useTheme();
    const isLightMode = theme === THEME.LIGHT;
    
    return  <div className={clsx(
        'p-4 h-dvh w-full',
        isLightMode? 'bg-white': 'bg-gray-800'
    )}>ThemeContent</div>
  }
  