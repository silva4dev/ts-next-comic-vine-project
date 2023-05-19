export type CharacterProps = {
    character: {
        name: string;
        gender: number;
        deck: string;
        image: { original_url: string };
        publisher: { name: string };
        description: string;
        real_name: string;
        aliases: string;
        powers: [{ name: string }];
        movies: [{ name: string }];
        origin: { name: string };
        date_added: string;
        date_last_updated: string;
    };
};

export type CharactersProps = {
    character: {
        id: number;
        name: string;
        image: { thumb_url: string };
    };
};

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    goToFirstPage: () => void;
    goToPreviousPage: () => void;
    getPageRange: () => any[];
    handlePageChange: (page: number) => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
};

export type SearchBarProps = {
    searchBar: string;
    setSearchBar: (name: string) => void;
    setSearchQueryName: any;
    setSearchQueryPage: any;
};

export type DefaultLayoutProps = {
    children: React.ReactNode;
};

export type CharacterDetailProps = {
    name: string;
    gender: number;
    deck: string;
    image: { original_url: string };
    publisher: { name: string };
    description: string;
    real_name: string;
    aliases: string;
    powers: [{ name: string }];
    movies: [{ name: string }];
    origin: { name: string };
    date_added: string;
    date_last_updated: string;
};

export type CharactersDetailsProps = {
    results: CharacterDetailProps;
};

export type Character = {
    id: number;
    name: string;
    image: { thumb_url: string };
};

export type Characters = {
    number_of_total_results: number;
    results: Character[];
};

export type CharacterState = {
  characters: any[];
  loading: boolean;
};

export type CharacterDetailState = {
  character: any[];
  loading: boolean;
};
