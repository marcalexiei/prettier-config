type DeveloperType = 'frontend' | 'backend' | 'fullstack';

interface Developer {
  type: DeveloperType;

  name: string;
}

type Union =
  | { prova1: boolean }
  | { prova2: number }
  | { prova3: string }
  | { prova4: string }
  | { prova5: string };

type Complex = Developer &
  (
    | { prova1: boolean }
    | { prova2: number }
    | { prova3: string }
    | { prova4: string }
    | { prova5: string }
  );
