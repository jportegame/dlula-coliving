interface GoogleMapEmbedProps {
  embedUrl: string;
}

const GoogleMapEmbed = ({ embedUrl }: GoogleMapEmbedProps) => {
  return (
    <div className=" w-full overflow-hidden rounded shadow">
      <iframe
        src={embedUrl}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-90 border-0"
      />
    </div>
  );
};

export default GoogleMapEmbed;
