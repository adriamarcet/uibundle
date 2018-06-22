<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends Controller
{
    /**
     * @Route("/", name="page_index")
     */
    public function index()
    {
        return $this->render('styleguide/pages/home.html.twig');
    }

    /**
     * @Route("/components/{template}", name="page_components")
     */
    public function components($template = 'index')
    {
        return $this->render('styleguide/pages/components/'. $template .'.html.twig');
    }

    /**
     * @Route("/a11y/{template}", name="page_a11y")
     */
    public function a11y($template = 'index')
    {
        return $this->render('styleguide/pages/a11y/'. $template .'.html.twig');
    }
}
