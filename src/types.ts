export interface GuestComment {
  id: string;
  name: string;
  relationship: 'Teman' | 'Keluarga' | 'Rekan' | 'Lainnya';
  message: string;
  isAttending: 'Hadir' | 'Tidak Hadir' | 'Ragu-ragu';
  timestamp: string;
}
