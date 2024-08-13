declare const angular: any;
import './side-bar.styles.scss';

export const sideNavModule = angular.module('sideNavModule', [])
  .controller('SideNavController', SideNavController);

export default sideNavModule.name;

SideNavController.$inject = ['$scope'];
function SideNavController($scope: any) {
  let vm = this;
  vm.openNav = openNav;
  vm.closeNav = closeNav;

  function openNav() {
    document.body.classList.add('active');
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.width = '250px';
  }

  function closeNav() {
    document.body.classList.remove('active');
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) sidenav.style.width = '0';
  }
}
