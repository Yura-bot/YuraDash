<template>
    <div class="iq-navbar-header" style="height: 215px;">
    <div class="container-fluid iq-container">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <h1>{{ t('home.title') }}</h1>
                        <p>{{ t('home.desc') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="iq-header-img">
        <img src="@/assets/images/dashboard/top-header.png" alt="header" class="img-fluid w-100 h-100 animated-scaleX">
    </div>
</div>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'SubHeader',
  setup () {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local'
    })
    return { t }
  }
}
</script>
