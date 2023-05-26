import { BsArrowUp } from 'react-icons/bs';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, rem } from '@mantine/core';

const ScrollTop = () => {
    const [scroll, scrollTo] = useWindowScroll();
  
    return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            leftIcon={<BsArrowUp size="1rem" />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          />
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollTop;
