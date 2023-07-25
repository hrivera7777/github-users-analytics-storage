import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('int')
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('text', { nullable: true })
  email: string;

  @Column('text')
  login: string;

  @Column('text')
  node_id: string;

  @Column('text')
  avatar_url: string;

  @Column('text')
  gravatar_id: string | null;

  @Column('text')
  url: string;

  @Column('text')
  html_url: string;

  @Column('text')
  followers_url: string;

  @Column('text')
  following_url: string;

  @Column('text')
  gists_url: string;

  @Column('text')
  starred_url: string;

  @Column('text')
  subscriptions_url: string;

  @Column('text')
  organizations_url: string;

  @Column('text')
  repos_url: string;

  @Column('text')
  events_url: string;

  @Column('text')
  received_events_url: string;

  @Column('text')
  type: string;

  @Column('text')
  site_admin: boolean;

  @Column('text', { nullable: true })
  starred_at: string;

  @Column('int', { nullable: true })
  score: number;

  @Column('text', { nullable: true })
  bio: string;

  @Column('int')
  followers: number;

  @Column('int', { nullable: true })
  following: number;

  @Column('text')
  created_at: string;

  @Column('text', { nullable: true })
  location: string;

  @Column('int', { nullable: true })
  public_repos: number;

  @Column('int', { nullable: true })
  public_gists: number;
}
