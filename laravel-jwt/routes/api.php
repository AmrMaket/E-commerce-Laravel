<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CustomAuthController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('signup', 'signup');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('login',[CustomAuthController::class,'login']);
Route::post('signup',[CustomAuthController::class,'signup']);

Route::post('/add_update_product/{id?}', [ProductController::class, "addOrUpdateProduct"]);
Route::post('/delete_product/{id}', [ProductController::class, "deleteProduct"]);
Route::get('/show_products', [ProductController::class, "getProducts"]);

Route::post('/add_favorite', [FavoriteController::class, "addFavorites"]);
Route::get('/show_favorite', [FavoriteController::class, "getFavorites"]);

Route::post('/show_cart', [CartitemsController::class, "viewCart"]);
Route::post('/add_cart', [CartitemsController::class, "addToCart"]);
