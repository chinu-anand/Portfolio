import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {['home', 'about', 'work', 'skills', 'footer'].map((item, index) => (
                // eslint-disable-next-line
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots