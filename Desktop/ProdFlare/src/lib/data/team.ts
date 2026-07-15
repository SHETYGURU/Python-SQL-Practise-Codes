export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Marcus Vance",
    designation: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Elena Rostova",
    designation: "Lead Product Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Siddharth Sen",
    designation: "Principal Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    name: "Aria Chen",
    designation: "Product Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 5,
    name: "Liam O'Connor",
    designation: "Growth Lead",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80"
  }
];
