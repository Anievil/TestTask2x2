import React from 'react';
import {UnitifatedText} from '../../commonComponents';
import {color, windowWidth} from '../../constants';
import {StyledImage, StyledView, StyledScrollView} from '../../styles';

const PostScreen = () => {
  return (
    <StyledView flex={1}>
      <StyledImage
        position="absolute"
        src="https://s3-alpha-sig.figma.com/img/75a4/05fa/f002f29b525831aebc083a3a3d76c40e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JVpyn94f-wRzYxwErgVd6YMrK3ys-Cie95S7iNW8BOkjqNyEcdr3V0opHBgG9rJbTKx-d~Y0fiDf1M1JUxRZrfFGBeC0RSVxEzV3G-Ehv2UUJWBG1~BrwJUr3-vZ2CVXz6l-OJ9KjMOlICdy7HqAaTEogb4S2cUzycrTFCT1Z36xHTjzZZtS87VFhapCa9mRKTrPSFVTpNVSHM8yNgPEIcEnZlIRIs6Cy~OGl9nO-OobGdwSI1iCZWrZ3sH3YLU5SFQkev6pKzvpTyapQxk0uHtsrDcpue-QehXMKA2jJN4eKlUu-~blxo-Y29IyOgaC~4hVZ7CDQOH5~MS7WjHupA__"
        width={windowWidth + 'px'}
        height="50%"
      />
      <StyledView
        position="absolute"
        bottom="0px"
        height="60%"
        width={windowWidth + 'px'}
        backgroundColor={color.textConteinerColor}
        borderTopLeftRadius="50px"
        borderTopRightRadius="50px"
        overflow="hidden"
        pt="26px"
        ph="30px">
        <UnitifatedText
          text="Sunday, 9 May 2021"
          textType="time"
          margin={{mb: '15px'}}
        />
        <StyledScrollView >
          <UnitifatedText
            text="Scientific research has uncovered a new mystery lurking in the depths of the ocean. As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments."
            textType="desc"
            margin={{mb: '15px'}}
          />
          <UnitifatedText
            text="At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms."
            textType="desc"
          />
        </StyledScrollView>
      </StyledView>
    </StyledView>
  );
};

export default PostScreen;
