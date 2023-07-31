<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomAuthController;

Route::controller(AuthController::class)->group(function () {
    Route::post('signup', 'signup');
    Route::post('login', 'login');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/signup', [AuthController::class, 'signup'])->name('signup');
// Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login.form');

// Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::post('/add_update_product/{id?}', [ProductController::class, "addOrUpdateProduct"]);
Route::post('/delete_product/{id}', [ProductController::class, "deleteProduct"]);
Route::get('/show_products', [ProductController::class, "getProducts"]);

Route::post('/add_favorite', [FavoriteController::class, "addFavorites"]);
Route::get('/show_favorite', [FavoriteController::class, "getFavorites"]);

Route::post('/show_cart', [CartitemsController::class, "viewCart"]);
Route::post('/add_cart', [CartController::class, "addToCart"]);
