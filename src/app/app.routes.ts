import { Routes } from '@angular/router';
import { SareeProductComponent } from './saree-product/saree-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BagProductComponent } from './bag-product/bag-product.component';
import { JewelleryProductComponent } from './jewellery-product/jewellery-product.component';
import { KurtiProductComponent } from './kurti-product/kurti-product.component';
import { DressMaterialComponent } from './dress-material/dress-material.component';
import { BlouseComponent } from './blouse-product/blouse.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
// import { FilterComponent } from './filter/filter.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', redirectTo: '', pathMatch: 'full' },
    { path: 'product/saree', component: SareeProductComponent },
    { path: 'saree', redirectTo: 'product/saree', pathMatch: 'full' },
    { path: 'product/bag', component: BagProductComponent },
    { path: 'bag', redirectTo: 'product/bag', pathMatch: 'full' },
    { path: 'product/jewellery', component: JewelleryProductComponent },
    { path: 'jewellery', redirectTo: 'product/jewellery', pathMatch: 'full' },
    { path: 'product/kurti', component: KurtiProductComponent },
    { path: 'kurti', redirectTo: 'product/kurti', pathMatch: 'full' },
    { path: 'product/blouse', component: BlouseComponent },
    { path: 'blouse', redirectTo: 'product/blouse', pathMatch: 'full' },
    { path: 'product/dress-material', component: DressMaterialComponent },
    { path: 'dress-material', redirectTo: 'product/dress-material', pathMatch: 'full' },
    { path: 'product/wishlist', component: WishlistComponent },
    { path: 'wishlist', redirectTo: 'product/wishlist', pathMatch: 'full' },
    { path: 'product/account', component: AccountComponent },
    { path: 'account', redirectTo: 'product/account', pathMatch: 'full' },
    { path: 'product/cart', component: CartComponent },
    { path: 'cart', redirectTo: 'product/cart', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },

];
