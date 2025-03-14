<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SpotifyService
{
    protected $clientId;

    protected $clientSecret;

    protected $refreshToken;

    protected $authUrl;

    protected $apiUrl;

    public function __construct()
    {
        $this->clientId = config('services.spotify.client_id');
        $this->clientSecret = config('services.spotify.client_secret');
        $this->refreshToken = config('services.spotify.refresh_token');
        $this->authUrl = config('services.spotify.auth_url');
        $this->apiUrl = config('services.spotify.api_url');
    }

    protected function getAccessToken()
    {
        $response = Http::asForm()->post($this->authUrl, [
            'grant_type' => 'refresh_token',
            'refresh_token' => $this->refreshToken,
            'client_id' => $this->clientId,
            'client_secret' => $this->clientSecret,
        ]);

        return $response->json()['access_token'];
    }

    protected function makeRequest($endpoint)
    {
        $accessToken = $this->getAccessToken();

        return Http::withHeaders([
            'Authorization' => 'Bearer '.$accessToken,
        ])->get($this->apiUrl.$endpoint)->json();
    }

    public function getNowPlaying()
    {
        return $this->makeRequest('/me/player/currently-playing');
    }

    public function getRecentTracks()
    {
        return $this->makeRequest('/me/player/recently-played');
    }

    public function getTopArtists()
    {
        return $this->makeRequest('/me/top/artists');
    }

    public function getTopTracks()
    {
        return $this->makeRequest('/me/top/tracks');
    }

    public function getPlaylists()
    {
        return $this->makeRequest('/me/playlists');
    }
}
