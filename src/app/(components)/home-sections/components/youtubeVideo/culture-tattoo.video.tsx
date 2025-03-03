import { VideoContainer, ResponsiveIframe } from './video.styled';

export const YouTubeEmbed = ({ embedId }: { embedId: string }) => {
   return (
      <VideoContainer>
         <ResponsiveIframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
         ></ResponsiveIframe>
      </VideoContainer>
   );
};
