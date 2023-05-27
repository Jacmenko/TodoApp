import { BsArrowUp } from "react-icons/bs";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, ActionIcon, Transition, rem } from "@mantine/core";

const ScrollTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: rem(20), right: rem(20) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            bg={"#027148"}
            c={"white"}
            sx={{borderRadius: "16px"}}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <BsArrowUp size="1rem" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollTop;
