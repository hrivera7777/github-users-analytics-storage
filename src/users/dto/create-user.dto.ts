import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsString()
  login: string;

  @IsInt()
  id: number;

  @IsString()
  node_id: string;

  @IsString()
  avatar_url: string;

  @IsString()
  gravatar_id: string | null;

  @IsString()
  url: string;

  @IsString()
  html_url: string;

  @IsString()
  followers_url: string;

  @IsString()
  following_url: string;

  @IsString()
  gists_url: string;

  @IsString()
  starred_url: string;

  @IsString()
  subscriptions_url: string;

  @IsString()
  organizations_url: string;

  @IsString()
  repos_url: string;

  @IsString()
  events_url: string;

  @IsString()
  received_events_url: string;

  @IsString()
  type: string;

  @IsString()
  site_admin: boolean;

  @IsString()
  @IsOptional()
  starred_at: string;

  @IsInt()
  @IsOptional()
  score: number;

  @IsString()
  @IsOptional()
  bio: string;

  @IsInt()
  followers: number;

  @IsInt()
  @IsOptional()
  following: number;

  @IsString()
  created_at: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsInt()
  @IsOptional()
  public_repos: number;

  @IsInt()
  @IsOptional()
  public_gists: number;
}
