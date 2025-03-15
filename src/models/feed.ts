export type Feed = {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: Entry[];
    updated: {
      label: string;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: LinkAttributes[];
    id: {
      label: string;
    };
  };
};

export type Entry = {
  "im:name": {
    label: string;
  };
  "im:image": ImageAttributes[];
  "im:itemCount": {
    label: string;
  };
  "im:price": PriceAttributes;
  "im:contentType": ContentType;
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: LinkAttributes;
  id: {
    label: string;
    attributes: IdAttributes;
  };
  "im:artist": {
    label: string;
    attributes: ArtistAttributes;
  };
  category: {
    attributes: CategoryAttributes;
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
};

type LinkAttributes = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

type ImageAttributes = {
  label: string;
  attributes: {
    height: string;
  };
};

type IdAttributes = {
  "im:id": string;
};

type ArtistAttributes = {
  href: string;
};

type PriceAttributes = {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
};

type CategoryAttributes = {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
};

type ContentTypeAttributes = {
  term: string;
  label: string;
};

type ContentType = {
  "im:contentType": {
    attributes: ContentTypeAttributes;
  };
  attributes: ContentTypeAttributes;
};
