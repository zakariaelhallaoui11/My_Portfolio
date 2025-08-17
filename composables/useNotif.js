import Swal from 'sweetalert2'

export const useNotif = (icon, title, position = "bottom-start") => {
    Swal.mixin({
        toast: true,
        position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    })
    .fire({
        icon,
        title
    }); 
}