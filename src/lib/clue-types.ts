export interface GameStatus {
  active: boolean;
  totalClues: number;
  message?: string;
}

export interface Clue {
  id: number;
  title: string;
  riddle: string;
  location_hint: string;
  flavor_text: string;
  media_type: "text" | "image" | "audio";
  media_url?: string;
  is_decoy?: boolean;
  passcode?: string;
}

export interface UnlockResponse {
  success: boolean;
  next_clue_id: number | "final";
}

export interface FinaleData {
  ending_title: string;
  ending_message: string;
  secret_lore: string;
  stats: {
    clues_completed: number;
    hints_used: number;
    duration_minutes: number;
  };
}

export interface SecretPage {
  valid: boolean;
  achievement_name?: string;
  secret_fragment?: string;
}
